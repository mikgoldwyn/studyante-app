from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from . import models


class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'type')
    list_filter = ('username',)
    fieldsets = (
        (
            None,
            {'fields': (
                'username',
                'first_name',
                'last_name',
                'password',
                'type',
            )}
        ),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (
            None,
            {'fields': (
                'username',
                'first_name',
                'last_name',
                'password1',
                'password2',
                'type',
            )}
        ),
    )


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Requirement)
admin.site.unregister(Group)
