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
