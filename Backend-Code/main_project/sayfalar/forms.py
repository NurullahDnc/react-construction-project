from django import forms
class HomeAddCreate(forms.Form):
    title=forms.CharField(label="Kurs Başlık",required=True,error_messages={"required":"kurs başlığını girmelisiniz"})
    text=forms.CharField(widget=forms.Textarea)
    img=forms.CharField()
    slug=forms.CharField()
