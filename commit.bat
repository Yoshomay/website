@echo off
: adds the changed files
::set /p updatedFiles="what files?: "
::if "%updatedFiles%"=="" (
    git add *
::) else git add %updatedFiles%


: ask what
::set /p commitChanges="what changed?: " 

: says whats changed
::if "%commitChanges%"=="" (
echo on
    @git commit -m "cant be bothered to enter what"
::)   else git commit -m "%commitChanges%"

: pushes them to the repo
@echo off
git push

echo.

echo its updated
pause