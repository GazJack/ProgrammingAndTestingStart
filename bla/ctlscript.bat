@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Programavimas Testavimas\Programavimas\bla\hypersonic\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\ingres\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\ingres\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\mysql\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\mysql\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\postgresql\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\postgresql\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\apache\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\apache\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\openoffice\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\openoffice\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\apache-tomcat\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\resin\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\resin\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\jetty\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\jetty\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\subversion\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\Programavimas Testavimas\Programavimas\bla\lucene\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\lucene\scripts\ctl.bat START)
if exist C:\Programavimas Testavimas\Programavimas\bla\third_application\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Programavimas Testavimas\Programavimas\bla\third_application\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\third_application\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\lucene\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Programavimas Testavimas\Programavimas\bla\subversion\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\subversion\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\jetty\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\jetty\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\hypersonic\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\resin\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\resin\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\Programavimas Testavimas\Programavimas\bla\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\openoffice\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\openoffice\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\apache\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\apache\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\ingres\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\ingres\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\mysql\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\mysql\scripts\ctl.bat STOP)
if exist C:\Programavimas Testavimas\Programavimas\bla\postgresql\scripts\ctl.bat (start /MIN /B C:\Programavimas Testavimas\Programavimas\bla\postgresql\scripts\ctl.bat STOP)

:end

