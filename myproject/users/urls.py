from django.urls import path
from .views import UserRegistrationView, UserProfileView
from .views import RegisterView


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('register/', RegisterView.as_view(), name='register'),
]
