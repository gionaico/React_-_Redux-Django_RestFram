from django.core.mail import send_mail, BadHeaderError
from rest_framework import permissions, status, views, viewsets
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response
from .serializers import ContactFormSerializer
import json

class ContactView(views.APIView): 
    serializer_class = ContactFormSerializer

    def post(self, request):
        """ print (json.dumps(request.data))
        print (type(json.dumps(request.data)))
        u=json.dumps(request.data)
        d = json.loads(json.dumps(request.data)) """
        
        info = request.data.get('data', {})
        print (info)
        serializer = self.serializer_class(data=info)
        serializer.is_valid(raise_exception=True)


        print '**********************************'
        return Response({
                    'status': 'true',
                    'message': 'Success! Thank you for your message'
                }, status=status.HTTP_200_OK)
        
        data = request.data
        print data
        print '**********************************'
        email = data.get('email', None)
        print email
        print '**********************************'
        subject = data.get('company', None)
        print subject
        print '**********************************'
        message = data.get('projectDescription', None)
        print message
        print '**********************************'
        
                
            
        try:
            print "try"
            send_mail(subject, message, 'gm.4int@gmail.com', [email])
        except BadHeaderError:
            print "ex"
            return Response({
                    'status': 'false',
                    'message': 'BadHeaderError for your message'
                }, status=status.HTTP_503_SERVICE_UNAVAILABLE)

        return Response({
                    'status': 'true',
                    'message': 'Success! Thank you for your message'
                }, status=status.HTTP_200_OK)
