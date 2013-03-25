@echo off

@for /f %%i in ( 'svnversion' ) do set version=%%i

@set str=%version%
@set result=%version%

@set /a num=0
:next
@if not "%str%"=="" (
   @rem @echo str=%str%
   @rem @echo str=%str:~0,1%
   if "%str:~0,1%"==":" (
      @set result=%str:~1%
      goto last
   )
   set /a num+=1
   if "%str:~0,1%"=="%str%" (
      goto last
   )
   set "str=%str:~1%"
   goto next
)
:last

if "%result:~-1%"=="M" (
   @set result=%result:~0,-1%
)

@rem @echo result=%result%
@echo %result%