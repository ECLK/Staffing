FROM openjdk:8
RUN wget https://product-dist.ballerina.io/downloads/1.0.1/ballerina-linux-installer-x64-1.0.1.deb
RUN dpkg -i ballerina-linux-installer-x64-1.0.1.deb
WORKDIR /usr/src
ADD src /usr/src/src
ADD Ballerina.toml /usr/src/Ballerina.toml
RUN ballerina build services
CMD [ "java", "-jar", "/usr/src/target/bin/services.jar" ] 
