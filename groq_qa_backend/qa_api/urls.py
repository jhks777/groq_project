# qa_api/urls.py
from django.urls import path
from .views import QAResponseView

urlpatterns = [
    path('api/qa/', QAResponseView.as_view(), name='qa_api'),
]
