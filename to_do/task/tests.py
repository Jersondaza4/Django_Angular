from django.test import TestCase
from .models import Task

from django.test import TestCase
from .models import Task
from .serializers import TaskSerializer


class TaskModelTest(TestCase):

    def test_create_task(self):
        task = Task.objects.create(
            name='Test Task',
            description='This is a test task',
            priority='High'
        )
        self.assertEqual(task.name, 'Test Task')
        self.assertEqual(task.description, 'This is a test task')
        self.assertEqual(task.priority, 'High')

    def test_str_method(self):
        task = Task.objects.create(
            name='Test Task',
            description='This is a test task',
            priority='High'
        )
        self.assertEqual(str(task), 'Test Task')


class TaskSerializerTest(TestCase):

    def setUp(self):
        self.task_attributes = {
            'name': 'Test Task',
            'description': 'This is a test task',
            'priority': '1'
        }
        self.task = Task.objects.create(**self.task_attributes)
        self.serializer = TaskSerializer(instance=self.task)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['id', 'name', 'description', 'priority']))

    def test_name_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['name'], self.task_attributes['name'])

    def test_description_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['description'], self.task_attributes['description'])

    def test_priority_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['priority'], self.task_attributes['priority'])

    def test_serializer_create(self):
        data = {
            'name': 'New Task',
            'description': 'This is a new task',
            'priority': 'Medium'
        }
        serializer = TaskSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        task = serializer.save()
        self.assertEqual(task.name, data['name'])
        self.assertEqual(task.description, data['description'])
        self.assertEqual(task.priority, data['priority'])