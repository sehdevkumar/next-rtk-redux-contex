"use server";
export const registerAction = async (payload: any,formData: FormData) => {

    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved')
        }, 3000);
    })

    return {
        success: true,
        message: 'User registered successfully'
    } as any
}