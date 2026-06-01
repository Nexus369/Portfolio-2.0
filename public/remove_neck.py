import sys
from PIL import Image

def remove_neck(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # For each column, find the lowest "dark" pixel (which is the beard)
    # and make everything below it transparent.
    for x in range(width):
        lowest_beard_y = -1
        # Search from bottom up
        for y in range(height - 1, -1, -1):
            r, g, b, a = pixels[x, y]
            # Check if the pixel is dark (part of the black beard/hoodie) and opaque
            if a > 100 and r < 60 and g < 60 and b < 60:
                lowest_beard_y = y
                break
        
        # If we found the beard in this column, make everything below it transparent
        if lowest_beard_y != -1:
            for y in range(lowest_beard_y + 1, height):
                # Only erase if it's not already transparent
                if pixels[x, y][3] > 0:
                    pixels[x, y] = (0, 0, 0, 0)
        else:
            # If no beard found in this column (e.g. edges), just make the lower half transparent to be safe?
            # Actually, let's just leave it, or make any skin-colored pixels transparent.
            pass

    # A second pass to clean up any remaining floating skin pixels at the very bottom
    # We know the neck is at the bottom, so any skin tone in the bottom 30% gets erased
    for x in range(width):
        for y in range(int(height * 0.7), height):
            r, g, b, a = pixels[x, y]
            # Skin tone is roughly higher red, some green, lower blue
            if a > 0 and r > 100 and g > 60 and r > b:
                pixels[x, y] = (0, 0, 0, 0)

    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_neck(sys.argv[1], sys.argv[2])
