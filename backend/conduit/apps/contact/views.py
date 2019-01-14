from django.core.mail import send_mail, BadHeaderError
from rest_framework import permissions, status, views, viewsets
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response


class ContactView(views.APIView): 
    print '********************************** welcome ContactView'
    def post(self, request, format=None):
        """
        return Response({
                    'status': 'true',
                    'message': 'Success! Thank you for your message'
                }, status=status.HTTP_200_OK)
        """
        
        print '**********************************'
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
        
        """
        return Response({
                    'status': 'true',
                    'message': 'Success! Thank you for your message'
                }, status=status.HTTP_200_OK)
        """
        
        if email is None:
            print "1"
            """ return Response({
                    'status': 'false',
                    'message': "field is missing"
                }, status=status.HTTP_400_BAD_REQUEST) """
            return Response({
                    'email': True,
                    'status': False,
                    'message': "field is missing"
                })
        elif subject is None:
            print "2"
            return Response({
                    'status': 'false',
                    'message': "'subject' field is missing"
                }, status=status.HTTP_400_BAD_REQUEST)
        elif message is None:
            print "3"
            return Response({
                    'status': 'false',
                    'message': "'message' field is missing"
                }, status=status.HTTP_400_BAD_REQUEST)
            
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
