import 'package:flutter/material.dart';
import 'widgets/app_title.dart';
import 'widgets/custom_button.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const AppTitle(title: 'Bem-vindo à Home Page'),
            const SizedBox(height: 20),
            CustomButton(
              text: 'Clique aqui',
              onPressed: () {
                print('Botão clicado!');
              },
            ),
          ],
        ),
      ),
    );
  }
}
