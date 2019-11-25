from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    TEACHER = 'teacher'
    STUDENT = 'student'
    USER_TYPES = (
        (TEACHER, 'Teacher'),
        (STUDENT, 'Student'),
    )
    MALE = 'male'
    FEMALE = 'female'
    GENDERS = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )
    gender = models.CharField(
        max_length=6,
        choices=GENDERS,
    )
    type = models.CharField(
        max_length=7,
        choices=USER_TYPES,
        default=STUDENT,
    )


class Requirement(models.Model):
    SUBJECTS = (
        ('MATH', 'MATH'),
        ('FILIPINO', 'FILIPINO'),
        ('ENGLISH', 'ENGLISH'),
        ('SCIENCE', 'SCIENCE'),
        ('AP', 'AP'),
        ('TLE', 'TLE'),
        ('CE', 'CE'),
        ('COMPUTER', 'COMPUTER'),
        ('MAPEH', 'MAPEH'),
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

    def __str__(self):
        return (
            f'{self.name}'
            ' | '
            f'{self.get_subject_display()}'
            ' | '
            f'{self.student}'
            ' | '
            f'{self.get_status_display()}'
        )
