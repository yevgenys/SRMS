"""
URL configuration for be project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.urls import path, re_path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

API_DEFAULT_VERSION = "v1/api"

urlpatterns = [
    path(f'{API_DEFAULT_VERSION}/student/', include("student.urls"), name="students"),
    path(f'{API_DEFAULT_VERSION}/result/', include("result.urls"), name="results"),
    path(f'{API_DEFAULT_VERSION}/course/', include("course.urls"), name="course"),
]

if settings.DEBUG:
    schema_view = get_schema_view(
        openapi.Info(
            title="Snippets API",
            default_version='v1'
        ),
        public=False,
        permission_classes=(permissions.AllowAny,),
    )

    urlpatterns.append(
        re_path(r'^doc/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    )
