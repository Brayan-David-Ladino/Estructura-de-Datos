# Estructura-de-Datos
## Datos de entrada necesarios (Módulo 2)
### 1. Datos del paciente (heredados del módulo 1)
* Edad, sexo, peso, talla (IMC).
* Condiciones médicas (ej. hipertensión, diabetes, etc.).
* Alergias a materiales quirúrgicos (látex, ciertos metales, medicamentos).
* Estado actual (signos vitales, resultados preoperatorios).
### 2. Datos de la cirugía
* Tipo de cirugía (ejemplo: general, ortopédica, cardiovascular, neurológica, estética, laparoscópica, odontológica, etc.).
* Grado de complejidad (menor, mayor, de urgencia, programada).
* Tiempo estimado de duración.
* Técnica quirúrgica a usar (abierta, mínimamente invasiva, robótica).
### 3. Datos de los materiales quirúrgicos
* Tipo de insumos:
  * *Desechables*: guantes, jeringas, gasas, suturas.
  * *Reutilizables*: bisturís, pinzas, tijeras, separadores.
  * *Especializados*: implantes, prótesis, catéteres.
* Compatibilidad con el paciente (ej. prótesis de titanio vs acero inoxidable en caso de alergias).
* Normatividad colombiana (INVIMA, guías del Ministerio de Salud).
### 4. Datos logísticos
* Inventario disponible del hospital.
* Cantidad de elementos necesarios según número de profesionales en quirófano.
* Costos estimados por procedimiento.
## Posibles salidas
* *Lista personalizada de materiales* según cirugía + paciente.
* *Tablas dinámicas*: ejemplo (Cirugía ortopédica → prótesis de titanio + tornillos + guantes sin látex).
* *Gráficas*: consumo de materiales por tipo de cirugía.
* *Alertas*: falta de stock o incompatibilidad con paciente (ejemplo: “el paciente es alérgico al látex, se necesitan guantes de nitrilo”)
