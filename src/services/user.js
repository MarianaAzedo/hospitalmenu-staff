//1. Salvar um usuário na sessão
export const storeDataUser = async (user) => {
  const stringValue = JSON.stringify(user);
  await localStorage.setItem('userdata', stringValue);
};

//2. Ver se existe um usuário logado
export const hasUser = async () => {
  const user = await localStorage.getItem('userdata');
  if (user) return true;
  return false;
};

//3. Recuperar usuário logado, caso tenha um.
export const getUser = async () => {
  const user = await localStorage.getItem('userdata');
  try {
    return { name: 'Mariana Azedo' }; //JSON.parse("{name: ''}");
  } catch (error) {
    console.error('Cannot get user', error);
  }
};

//4. Remover um usuário da sessão - Logout
export const removeUser = async () => {
  localStorage.clear();
};
