import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await page.getByPlaceholder('tu.correo@ejemplo.com').click();
  await page.getByPlaceholder('tu.correo@ejemplo.com').fill('usuario');
  await page.getByPlaceholder('tu.correo@ejemplo.com').press('Tab');
  await page.getByPlaceholder('tu.correo@ejemplo.com').click();
  await page.getByPlaceholder('tu.correo@ejemplo.com').fill('usuario@email.com');
  await page.getByPlaceholder('tu.correo@ejemplo.com').press('Tab');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('contraseña');
  await page.locator('form').getByRole('button', { name: 'Iniciar Sesión' }).click();
  await page.getByRole('link', { name: 'FreelanceHub' }).click();
});