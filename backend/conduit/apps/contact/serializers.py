from rest_framework import serializers

class ContactFormSerializer(serializers.Serializer):
    print "ContactFormSerializer"
    email = serializers.CharField(max_length=500)
    projectDescription = serializers.CharField(max_length=500)
    company= serializers.CharField(max_length=100)

    
    def validate(self, data):
        print("000000000000")
        email = data.get('email', None)
        projectDescription = data.get('projectDescription', None)
        company = data.get('company', None)

        print(data.get('email', None))      
        if email is None:
            raise serializers.ValidationError('This field must be an even email.')
        print("111")            
        if projectDescription is None:
            raise serializers.ValidationError('This field must be an even text.')
        print("222")            
        if company is None:
            raise serializers.ValidationError('This field must be an even text.')
        print("333")  
        return {
            email,
            projectDescription,
            company
        }