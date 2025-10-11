# Estructura-de-Datos
#  Elementos Quirúrgicos en Colombia

###  Integrantes:
- Brayan David Ladino  
- Adrián David Cañón  

##  Introducción

Este proyecto busca crear una página donde se puedan visualizar los *elementos quirúrgicos* que se usan según el tipo de cirugía.  
La idea es que el sistema ayude a los profesionales de salud a escoger los materiales adecuados, ver gráficas por categorías y seguir las normas de salud que se aplican en Colombia (INVIMA y Ministerio de Salud).



##  Objetivo del Sistema

El objetivo principal es *mostrar los elementos quirúrgicos recomendados* según el tipo de cirugía y las condiciones del paciente.  
También se pretende ayudar con la gestión del inventario y detectar posibles alertas, como alergias a materiales o falta de stock.

---

##  Datos de Entrada (Módulo 2)

###  Datos del paciente
- Edad, sexo, peso y talla (IMC).  
- Condiciones médicas (ej: hipertensión, diabetes).  
- Alergias (látex, metales, medicamentos).  
- Estado actual (signos vitales y exámenes preoperatorios).

###  Datos de la cirugía
- Tipo de cirugía (general, ortopédica, cardíaca, neurológica, plástica, etc).  
- Grado de complejidad (menor, mayor, urgencia o programada).  
- Tiempo estimado de duración.  
- Técnica quirúrgica (abierta, mínimamente invasiva, robótica).

###  Datos de los materiales quirúrgicos
- Tipo de insumo (desechable, reutilizable o especializado).  
- Compatibilidad con el paciente (por ejemplo, guantes sin látex).  
- Normas colombianas (INVIMA, Ministerio de Salud).

###  Datos logísticos
- Inventario disponible del hospital.  
- Cantidad de elementos según el personal en quirófano.  
- Costos aproximados por cirugía.



##  Procesos del Sistema

1. El usuario selecciona un *tipo de cirugía* en la página.  
2. El sistema muestra una *lista de materiales recomendados* (bisturí, suturas, guantes, etc).  
3. Se revisa compatibilidad con el paciente (por ejemplo si tiene alergias).  
4. Se genera un *gráfico de barras* con la cantidad de elementos por categoría.  
5. Si hay problemas, el sistema lanza *alertas* (como falta de stock o material incompatible).



## Posibles Salidas

- Lista personalizada de materiales según tipo de cirugía y paciente.  
- Tablas y gráficas del consumo de materiales.  
- Alertas de alergias o falta de stock.  
- En futuras versiones: reportes imprimibles o descarga de datos.



## Tecnologías Usadas

| Tecnología | Uso |
|-------------|-----|
| *HTML* | Estructura de la página |
| *CSS* | Diseño y estilos visuales |
| *JavaScript* | Lógica, manejo de datos y gráficos |
| *Chart.js* | Librería para crear las gráficas |
| *GitHub Pages* | Publicación del sitio web |

## Resultados Esperados

- Ayudar al personal médico a planear mejor las cirugías.  
- Mostrar datos claros y visuales sobre los materiales usados.  
- Cumplir con la normatividad sanitaria colombiana.  
- Tener una interfaz fácil de usar e intuitiva.



##  Enlace del Proyecto

[Ver página en GitHub Pages](https://brayan-david-ladino.github.io/Estructura-de-Datos/)



##  Conclusión

El proyecto demuestra cómo la programación y las bases de datos pueden ayudar en el área médica.  
Con este sistema se puede automatizar la gestión de materiales quirúrgicos, ahorrar tiempo y mejorar la seguridad del paciente.
