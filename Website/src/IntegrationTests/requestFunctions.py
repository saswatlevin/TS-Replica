import requests
import json

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