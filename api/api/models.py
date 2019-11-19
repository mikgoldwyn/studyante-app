from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    TEACHER = 'teacher'
    STUDENT = 'student'
    USER_TYPES = (
        (TEACHER, 'Teacher'),
        (STUDENT, 'Student'),
    )
    type = models.CharField(
        max_length=7,
        choices=USER_TYPES,
        default=STUDENT,
    )


class Requirement(models.Model):
    MATH = 'math'
    FILIPINO = 'filipino'
    ENGLISH = 'english'
    SCIENCE = 'science'
    AP = 'ap'
    TLE = 'tle'
    CE = 'ce'
    COMPUTER = 'computer'
    MAPEH = 'mapeh'
    SUBJECTS = (
        (MATH, 'Math'),
        (FILIPINO, 'Filipino'),
        (ENGLISH, 'English'),
        (SCIENCE, 'Science'),
        (AP, 'AP'),
        (TLE, 'TLE'),
        (CE, 'CE'),
        (COMPUTER, 'Computer'),
        (MAPEH, 'MAPEH'),
    )
    PENDING = 'pending'
    COMPLETED = 'completed'
    STATUSES = (
        (PENDING, 'Pending'),
        (COMPLETED, 'Completed'),
    )
    name = models.CharField(
        max_length=64,
    )
    subject = models.CharField(
        max_length=32,
        choices=SUBJECTS,
    )
    status = models.CharField(
        max_length=32,
        choices=STATUSES,
    )
    student = models.ForeignKey(
        'api.User',
        related_name='requirements',
        on_delete=models.CASCADE,
    )
