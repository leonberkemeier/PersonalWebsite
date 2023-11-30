from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages


# Create your views here.
@login_required(login_url='login')
def test(request):
    return render(request, 'test.html')

def home(request):
    return render(request, 'index.html')

def loginPage(request):
    
    if request.user.is_authenticated:
        
        return redirect('postlogin')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            context={} 
            user = authenticate(request, username=username, password = password)

            if user is not None:
                
                login(request, user)
                
                return redirect('postlogin')
        
            else:
                
                messages.info(request, 'Username OR Password is Incorrect')
                return render(request, 'login.html', context)

        context={} 
         
        return render(request, 'login.html', context)

