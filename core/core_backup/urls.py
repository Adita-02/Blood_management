
f"""
URL configuration for core project.

The urlpatterns list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
# from home.views import *
# from home import views


urlpatterns = [
    # path('' ,home ,name="home"),
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    # path('aboutus/', views.AboutUs, name='aboutus'),
    # path('addblood/', views.AddBlood, name='addblood'),
    # path('analystic/', views.AnaLystic, name='analystic'),
    # path('apply/', views.Apply, name='apply'),
    # path('blog/', views.Blog, name='blog'),
    # path('blood-group/', views.BloodGroup, name='blood-group'),
    # path('blood-pressure/', views.BloodPressure, name='blood-pressure'),
    # path('blood-supply-levels/', views.BloodSupplyLevels, name='blood-supply-levels'),
    # path('bloodavailavility/', views.BloodAvailavility, name='bloodavailavility'),
    # path('bloodstorage/', views.BloodStorage, name='bloodstorage'),
    # path('bookappoinment/', views.BookAppoinment, name='bookappoinment'),
    # path('callus/', views.CallUs, name='callus'),
    # path('can-i-give-blood/', views.CanIGiveBlood, name='can-i-give-blood'),
    # path('career/', views.Career, name='career'),
    # path('cmpreg/', views.Cmpreg, name='cmpreg'),
    # path('corporate-challenges/', views.CorporateChallenges, name='corporate-challenges'),
    # path('disaster-response/', views.DisasterResponse, name='disaster-response'),
    # path('donoform/', views.DonoForm, name='donoform'),
    # path('donorlist/', views.DonorList, name='donorlist'),
    # path('faq/', views.Faq, name='faq'),
    # path('form1/', views.Form1, name='form1'),
    # path('health-history/', views.HeathHistory, name='health-history'),
    # path('hemoglobin/', views.HemoGlobin, name='hemoglobin'),
    # path('how-to-give-blood/', views.HowToGiveBlood, name='how-to-give-blood'),
    # path('inspiring-hope/', views.InspiringHope, name='inspiring-hope'),
    # path('iron-deficiency/', views.IronDeficiency, name='iron-deficiency'),
    # path('mission/', views.Mission, name='mission'),
    # path('news/', views.News, name='news'),
    # path('offers/', views.Offers, name='offers'),
    # path('outreach/', views.Outreach, name='outreach'),
    # path('partners/', views.Partners, name='partners'),
    # path('prepare-and-aftercare/', views.PrepareAndAftercare, name='prepare-and-aftercare'),
    # path('prpose/', views.Prpose, name='prpose'),
    # path('read-more-page/', views.ReadMorePage, name='read-more-page'),
    # path('reciept/', views.Reciept, name='reciept'),
    # path('request/', views.Request, name='request'),
    # path('rewards-program/', views.RewardsProgram, name='rewards-program'),
    # path('setting/', views.Setting, name='setting'),
    # path('try/', views.Try, name='try'),
    # path('volunteer/', views.Volunteer, name='volunteer'),
    # path('where-to-give-blood/', views.WhereToGiveBlood, name='where-to-give-blood'),
    # path('what-we-specialized in/', views.WhatWeSpecializedIn, name='what-we-specialized in'),
]