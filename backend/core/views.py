from django.shortcuts import render
from rest_framework import generics
from .models import News, TeamMember, Publication, WebTeamMember
from .serializers import NewsSerializer, TeamMemberSerializer, PublicationSerializer, WebTeamMemberSerializer

class NewsListAPIView(generics.ListAPIView):
    queryset = News.objects.all().order_by('-year', '-id')
    serializer_class = NewsSerializer

class TeamListAPIView(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class PublicationListAPIView(generics.ListAPIView):
    queryset = Publication.objects.all().order_by('-year')
    serializer_class = PublicationSerializer

class WebTeamMemberListAPIView(generics.ListAPIView):
    queryset = WebTeamMember.objects.all().order_by('name')
    serializer_class = WebTeamMemberSerializer