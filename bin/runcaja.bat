@echo off
@setlocal
@setlocal enabledelayedexpansion

@set BASE_DIR=%~dp0..
@rem @set LIB_DIR=%BASE_DIR%\ant-jars
     @set LIB_DIR=%BASE_DIR%\minijars

@rem set CLASSPATH=%LIB_DIR%\*.jar

@cd %BASE_DIR%\bin
@set CLASSPATH=.
     @for %%i in ("..\ant-jars\*.jar") do set CLASSPATH=!CLASSPATH!;%%i
@rem @for %%i in ("..\minijars\*.jar") do set CLASSPATH=!CLASSPATH!;%%i


@echo on
@rem @echo "LIB_DIR=%LIB_DIR%"
@rem @echo "CLASSPATH=%CLASSPATH%"

@rem @set debug=-Xdebug -Xrunjdwp:transport=dt_socket,address=9797,server=y,suspend=n
@rem @set jvminspect=-javaagent:D:/06_passion/workspace/jvminspect/jvminspect.jar=flushIntervalSecond=120

java -D%BASE_DIR% -server -Xms128m -Xmx512m %jvminspect% %debug% -classpath %CLASSPATH% com.google.caja.plugin.PluginCompilerMain %1 %2 %3 %4 %5 %6 %7 %8 %9

@cd %~dp0
