from django.contrib import admin
from .models import Task
# Register your models here.

class TaskAdmin(admin.ModelAdmin):
    search_fields = ['name','description']
    list_display = ('name',)

admin.site.register(Task,TaskAdmin,)
