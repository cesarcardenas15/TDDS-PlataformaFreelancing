import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Elige un nombre de usuario').click();
  await page.getByPlaceholder('Elige un nombre de usuario').fill('usuario5@email.com');
  await page.getByPlaceholder('Elige un nombre de usuario').press('Tab');
  await page.getByPlaceholder('tu.correo@ejemplo.com').fill('usuario5@email.com');
  await page.getByPlaceholder('Elige un nombre de usuario').click();
  await page.getByPlaceholder('Elige un nombre de usuario').fill('usuario5');
  await page.getByPlaceholder('Crea una contraseña segura').click();
  await page.getByPlaceholder('Crea una contraseña segura').fill('contraseña');
  await page.getByRole('button', { name: 'Crear Cuenta' }).click();
});