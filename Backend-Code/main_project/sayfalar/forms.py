from django import forms
from .models import project

class HomeAddCreate(forms.ModelForm):
    class Meta:
        model = project
        fields = ("title", "text", "img", "slug")
        labels = {
            "title": "Kurs Başlığı giriniz",
            "text": "Açıklama"
        }
        widgets = {
            "title": forms.TextInput(attrs={"class": "form-control"}),
            "text": forms.Textarea(),
            "img": forms.TextInput(),
        }
        error_messages = {
            "title": {
                "required": "Kurs Başlığı giriniz",
                "max_length": "Lütfen 5 harften kısa bir cümle giriniz"
            },
            "text": {
                "required": "Lütfen bir kurs açıklaması giriniz",
                "max_length": "Lütfen 5 harften kısa bir cümle giriniz"
            }
        }

class HomeUpdate(forms.ModelForm):
    class Meta:
        model = project
        fields = ("title", "text", "img", "slug","category")
        labels = {
            "title": "Kurs Başlığı giriniz",
            "text": "Açıklama"
        }
        widgets = {
            "title": forms.TextInput(attrs={"class": "form-control"}),
            "text": forms.Textarea(),
            "img": forms.TextInput(),
        }
        error_messages = {
            "title": {
                "required": "Kurs Başlığı giriniz",
                "max_length": "Lütfen 5 harften kısa bir cümle giriniz"
            },
            "text": {
                "required": "Lütfen bir kurs açıklaması giriniz",
                "max_length": "Lütfen 5 harften kısa bir cümle giriniz"
            }
        }
