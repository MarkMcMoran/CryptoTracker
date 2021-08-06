FROM openjdk:11
ADD build/libs/app.jar app.jar
CMD ["java", "-jar" , "app.jar"]