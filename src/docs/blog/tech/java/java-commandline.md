---
date: "2020-12-23"
title: "Run Java from CommandLine"
featuredImage: ""
featuredImageAltText: ""
---

This article provides an all-in-one reference to compile, pack and run java source files with external dependencies from the command line.

## Environment Details

1. Operating System: Oracle Linux 7.8
2. Shell: bash
3. Terminal Emulator: gnome-shell
4. Text Editor: vim
5. Java: jdk1.8.0_181-amd64
6. External dependencies: jackson-core.jar, jackson-annotations.jar, jackson-databind.jar

## Getting Started

```shell
# Create and navigate to a new empty directory
mkdir java-cmdline
cd java-cmdline

# Create java source files
touch MyEnv.java Main.java
```

## Source Code

> The file name and public class name must be the same

```java
/**
 * A simple JavaBean for my env setup
 * @author	rohchakr
 */
public class MyEnv {
	private String textEditor;
	private String terminalEmulator;

	public String getTextEditor() {
		return textEditor;
	}

	public String getTerminalEmulator() {
		return terminalEmulator;
	}
}
```

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

/**
 * Main class
 * @author	rohchakr
 */
public class Main {
	public static void main(String[] args) {
		ObjectMapper objectMapper = new ObjectMapper();

		// For default-deserializer, json keys have to match with the class instance variables
		String myEnvJson = "{\"textEditor\":\"vim\", \"terminalEmulator\":\"gnome-terminal\"}";

		try {
			MyEnv myEnv = objectMapper.readValue(myEnvJson, MyEnv.class);
			System.out.println("Text Editor: " + myEnv.getTextEditor());
			System.out.println("Terminal Emulator: " + myEnv.getTerminalEmulator());
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
}
```

## Compile

```shell
# Create a new directory for class files
mkdir classes

# JDK installation directory
JAVA_HOME="/usr/java/jdk1.8.0_181-amd64"

# 3rd party libraries directory containing the three jackson jar files
JACKSON_DIR="/home/rohchakr/jackson"

# Compile MyEnv.java and generate MyEnv.class in classes directory
$JAVA_HOME/bin/javac -d classes MyEnv.java

# Compile Main.java with dependencies (jackson and MyEnv) and generate Main.class in classes directory
$JAVA_HOME/bin/javac -cp $JACKSON_DIR/*:classes -d classes Main.java
```

## Run Class File

> Skip this if we are going to generate JAR file and run that instead

```shell
# Navigate to classes directory
cd classes

# Run the main class file
$JAVA_HOME/bin/java -cp $JACKSON_DIR/*:. Main

# Come out of the classes directory
cd -
```

## Pack Classes in JAR and Run JAR File

### Approach 1 (Provide Classpath and Main Class while Running JAR)

```shell
# Generate MyJar.jar in the current directory using all files from classes directory
$JAVA_HOME/bin/jar cf MyJar.jar -C classes .

# Clean up classes directory
rm -rf classes

# Run JAR file
$JAVA_HOME/bin/java -cp $JACKSON_DIR/*:MyJar.jar Main
```

### Approach 2 (Provide Classpath and Main Class Using Custom Manifest File)

```shell
# Create a custom manifest file with main class and class path
mkdir META-INF
echo 'Main-Class: Main' > META-INF/MANIFEST.MF
echo "Class-Path: $JACKSON_DIR/jackson-core.jar $JACKSON_DIR/jackson-annotations.jar $JACKSON_DIR/jackson-databind.jar" >> META-INF/MANIFEST.MF

# Generate MyJar.jar in the current directory using custom manifest and all files from classes directory
$JAVA_HOME/bin/jar cmf META-INF/MANIFEST.MF MyJar.jar -C classes .

# Clean up classes and META-INF directory
rm -rf classes META-INF

# Run JAR file
$JAVA_HOME/bin/java -jar MyJar.jar
```

## Cleanup

```bash
# Remove the directory
cd ..
rm -rf java-cmdline
```