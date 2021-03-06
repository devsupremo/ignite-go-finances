import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Title,
  Transactions,
  TransactionList,            
  }from './styles';

export default function Dashboard() {
  const data = [
    {
    type: 'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    type: 'negative',
    title:"Hamburgueria Pizzy",
    amount:"R$ 59,00",
    category: {
      name: 'Alimentação',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    type: 'positive',
    title:"Aluguel do apartamento",
    amount:"R$ 1.200,00",
    category: {
      name: 'Casa',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  }
];

  return (
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/31295277?v=4'}} />
          <User>
            <UserGreeting> Olá, </UserGreeting>
            <UserName> Rodrigo </UserName>
          </User>
        </UserInfo>
        <Icon name="power"/>
        </UserWrapper>
      </Header>
       <HighlightCards>
         <HighlightCard
           type="up"
           title="Entradas"
           amount="R$ 17.400,00"
           lastTransaction="ultima entrada dia 13 de Abril" 
           />
         <HighlightCard
           type="down"
           title="Saídas"
           amount="R$ 1.000.000"
           lastTransaction="ultima entrada dia 13 de Abril" 
           />
         <HighlightCard
           type="total"
           title="Total"
           amount="R$ 16.400,00"
           lastTransaction="ultima entrada dia 13 de Abril" 
           />
       </HighlightCards>
    
        <Transactions>
          <Title> Listagem </Title>
          <TransactionList 
             data={data}
             renderItem={({item}) => <TransactionCard data={item} />}
             showsVerticalScrollIndicator={false}
             contentContainerStyle={{
               paddingBottom: getBottomSpace() 
             }}
          />
        </Transactions>
    </Container>
  )
}
