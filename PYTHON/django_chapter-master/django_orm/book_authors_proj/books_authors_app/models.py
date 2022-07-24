from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # Authors = Author.objects.all()

    def __repr__(self):
        return f'Title: {self.title}'

class Author(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    notes = models.TextField(default="No notes")
    books = models.ManyToManyField(Book, related_name='Authors')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f'Author: {self.first_name} {self.last_name}'