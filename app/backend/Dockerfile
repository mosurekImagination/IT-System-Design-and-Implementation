FROM gradle:jdk8 AS GRADLE_BUILD

WORKDIR /build/
COPY build.gradle.kts /build/
COPY src /build/src/
RUN gradle build --no-daemon 

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=GRADLE_BUILD /build/build/libs/ /app/
ENTRYPOINT ["java", "-jar", "build-0.0.1-SNAPSHOT.jar"]