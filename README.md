# uncinc-react-assessment

Voor dit project heb ik in React een paginator gebouwd met data uit een api. Ik heb de variabels currentPage en itemsPage gemaakt. Currentpage is voor de huidige pagina en daar heb ik useState[1] aangevoegd. Bij de itemsPage heb ik useState[10], dan verschijnen per pagina 10 objecten. Om de objecten te verschijnen, dus 10 per pagina heb ik de variabels indexLastItem en indefFirstItem. Die 2 slice ik dan en daarvan maak ik een nieuwe variable van genaamd items. Vervolgens worden die items gemapt en weergegeven.
<br/><br/>

## Screenshot

<img src="https://i.ibb.co/7Q3DfB1/Schermafbeelding-2022-05-09-om-11-18-48.png" alt="screen" width="500px">
<br/><br/>

## Dataset

De data die ik in de pagnator heb gebruikt is afkomstig van<br/> https://jsonplaceholder.typicode.com/
<br/><br/>

## Installeren

1. Clone de repository<br/>

```
  git clone https://github.com/muhammet075/uncinc-react-assessment
```

2. Navigeer naar het project<br/>

```
  cd uncinc-react-assessment
```

3. Installeer NPM<br/>

```
  npm install
```

4. Start de app op port 3000<br/>

```
  npm start
```
