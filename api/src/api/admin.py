from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from api.models import User


class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'type')
    list_filter = ('username',)
    fieldsets = (
        (None,
            {'fields': (
                'username',
                'password',
                'type',
            )}
        ),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None,
            {'fields': (
                'username',
                'password1',
                'password2',
                'type',
            )}
        ),
    )

admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
