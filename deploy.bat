@echo off
echo ===================================================
echo   Prabhat Iron Works - Automated GitHub Deployer   
echo ===================================================
echo.
echo Staging all outstanding changes...
git add .
echo.
echo Committing improvements (Security & Brochure layout fixes)...
git commit -m "Enhancement: Complete security linter cleanup & fluid dynamic PDF brochure layout fixes"
echo.
echo Pushing changes to remote main branch...
git push origin main
echo.
echo ===================================================
echo   Success! Check your GitHub Actions tab to view 
echo   the live deployment progress at:
echo   https://github.com/Veerbha1102/PRABHATIRONWORKS/actions
echo ===================================================
pause
