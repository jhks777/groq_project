# qa_api/groq_integration.py
import os
from groq import Groq
GROQ_API_KEY = os.getenv('GROQ_API_KEY', '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')
groq_client = Groq(api_key=GROQ_API_KEY)

def get_groq_response(user_question):
    chat_completion = groq_client.chat.completions.create(
        messages=[{"role": "user", "content": user_question}],
        model="llama3-8b-8192",
    )
    return chat_completion.choices[0].message.content
