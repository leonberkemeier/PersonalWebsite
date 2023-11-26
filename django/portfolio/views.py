from django.shortcuts import render

# Create your views here.

def test(request):
    return render(request, 'test.html')

def home(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

