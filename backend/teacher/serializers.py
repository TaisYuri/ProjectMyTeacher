from dataclasses import field, fields
from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Professor, Aula


class ProfessorSerializer( serializers.ModelSerializer):
    class Meta:
        model = Professor
     #   fields = ('id', 'nome', 'valor_hora','descricao', 'foto')  importar assim quando quiser remover algum dos campos ou tudo como abaixo
        fields = '__all__'


## METODO POST
# POST /professores/1/aulas 
# {
#     "email": "taisyuri@mail.com"
#     "nome": "Tais"
# }
class CadastrarAulaSerializer( serializers.Serializer):
    email = serializers.EmailField(max_length= 255 )
    nome = serializers.CharField(max_length= 100 )

    #validação de campos
    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("Campo NOME deve ter pelo menos 3 caracteres")
        return value



class AulaSerializer( serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'