from rest_framework.permissions import BasePermission


class IsSchoolManager(BasePermission):
    def has_permission(self, request, view):
        # for future refactoring
        return True
