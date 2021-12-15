import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component } from '@angular/core'

@Component({
  selector: 'calculator', //ROOT DO SELETOR
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
//ARRAY QUE COMPORTA OS ELEMENTOS DOS BOTÕES GRANDES E PEQUENOS 
export class CalculatorComponent {
  result: string = '';
  longButtons: string[] = ['AC', 'CE'];
  button: string[] = ['7', '8','9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];
  
  //SINALIZA A INTENÇÃO DA ENTRADA DE DADOS 
  private prevValue: string = '';
  private curValur: string = '';

  
  //FUNÇÃO PARA TRATATIVA DO VALUE DAS ENTRADAS
  addToExpression(value: string){
    if(this.result != '') {
      this.prevValue = this.curValur;
      this.curValur = value;
    }

    if (value == 'AC'){ // TRATATIVA PARA O BOTÃO "AC"
      this.result = '';
      } else if (value == 'CE'){ // TRATATIVA PARA O BOTÃO "CE"
        this.result = this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
      } else if (value == "="){ //TRATATIVA PARA O RESULTADO
        this.result = eval(this.result) //ULTIZANDO A FUNÇÃO "eval" PARA AVALIAR AS EXPRESSÕES
      } else {
        this.result += value; // CONCATENAÇÃO DE DADOS
      }
    }
    
  }

  
