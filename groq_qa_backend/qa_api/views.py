# qa_api/views.py
from django.http import JsonResponse
from django.views import View
from .groq_integration import get_groq_response

class QAResponseView(View):
    def post(self, request, *args, **kwargs):
        user_question = request.POST.get('question')
        if user_question:
            response = get_groq_response(user_question)
            return JsonResponse({'response': response})
        else:
            return JsonResponse({'error': 'Question parameter missing'}, status=400)

    def get(self, request, *args, **kwargs):
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)