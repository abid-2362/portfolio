from PIL import Image
import os

def resize_and_rename_images(directory, max_width=500, output_directory="resized"):
    # Create the output directory if it doesn't exist
    os.makedirs(output_directory, exist_ok=True)

    # Get all files in the directory
    files = os.listdir(directory)
    # Initialize a counter for numbering
    count = 1

    for file in files:
        # Check if the file is an image (you can add more image extensions if needed)
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Open the image
            image = Image.open(os.path.join(directory, file))

            # Convert RGBA image to RGB if needed
            if image.mode == "RGBA":
                image = image.convert("RGB")

            # Calculate new dimensions
            width, height = image.size
            if width > max_width:
                new_width = max_width
                new_height = int((height / width) * max_width)
                # Resize the image with preserving aspect ratio
                image = image.resize((new_width, new_height), Image.ANTIALIAS)

            # Split the file name and extension
            name, ext = os.path.splitext(file)
            # Rename the file
            new_name = f"product-{count}{ext}"
            # Save the resized image with the new name to the output directory
            image.save(os.path.join(output_directory, new_name), quality=95)  # Adjust quality as needed
            # Increment the counter
            count += 1

# Example usage:
directory = "./"
resize_and_rename_images(directory, max_width=500, output_directory="./resized3")
