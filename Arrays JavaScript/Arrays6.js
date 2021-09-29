



class Empresa{
    constructor(){
        this.empleados =[]
        this.crearEmpleados(5)
        window.onload = this.iniciar.bind(this)
    }
    iniciar(){
        this.leerSueldos()
        this.informarEntre(100,300)
        this.informarMasDe(300)
        this.informarGastoTotal()
    }
    crearEmpleados(num){
        for (let i = 0; i < num; i++) {
            
            this.empleados.push(new Empleado());
            
        }
    }
    leerSueldos(){
        for (let empleado of this.empleados){
            do{

                empleado.sueldo = prompt()
                
            }while (typeof empleado.sueldo !== 'number')

        }
       
    }
    informarEntre(min, max){
        for (let empleado of this.empleados)
            if(empleado.sueldo > min && empleado.sueldo <max){
                console.log(empleado)
            }
    }
    informarMasDe(){

    }
}
new Empresa()