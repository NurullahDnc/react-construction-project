from django.shortcuts import render
from database_conection.models import sql_connection
import pypyodbc

try:
    # Bağlantı dizesindeki bilgileri kendi veritabanı bilgilerinizle güncelleyin.
    db = pypyodbc.connect(
        'Driver={SQL Server};'
        'Server=LAPTOP-6NLHTDPR;'
        'Database=django_project;'
        'Trusted_Connection=yes;'
    )

    imlec = db.cursor()
    imlec.execute('SELECT * FROM person')

    kullanicilar = imlec.fetchall()
    for i in kullanicilar:
        print(i)

except Exception as e:
    print(f'Hata: {e}')

finally:
    # Bağlantıyı kapat
    db.close()
