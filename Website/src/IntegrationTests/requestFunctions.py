import requests
import json
import os

def getRequests(url, data):
    response = requests.get(url, json=data)
    return response

def postRequests(url, data):
    response = requests.post(url, json=data)
    return response

def putRequests(url, data):
    response = requests.put(url, json=data)
    return response

def patchRequests(url, data):
    response = requests.patch(url, json=data)
    return response

def deleteRequests(url, data):
    response = requests.delete(url, json=data)
    return response

def filePostRequests(url, data, file_path, file_field_name="image"):
    # Validate the file extension before attempting to send it
    allowed_extensions = (".webp", ".jpeg", ".jpg", ".png")
    if not file_path.lower().endswith(allowed_extensions):
        raise ValueError(
            f"Unsupported file type for '{file_path}'. "
            f"Allowed formats: webp, jpeg, jpg, png."
        )

    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"No file found at path: {file_path}")

    # Map extension to the correct MIME type for the multipart request
    extension_to_mime = {
        ".webp": "image/webp",
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpeg",
        ".png": "image/png",
    }
    ext = os.path.splitext(file_path)[1].lower()
    mime_type = extension_to_mime[ext]

    with open(file_path, "rb") as f:
        files = {
            file_field_name: (os.path.basename(file_path), f, mime_type)
        }
        # 'data' holds the non-file form fields (e.g. product_id);
        # passing both 'data' and 'files' makes requests build a
        # multipart/form-data body automatically
        response = requests.post(url, data=data, files=files)

    return response