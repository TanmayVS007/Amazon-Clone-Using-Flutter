// ignore_for_file: must_be_immutable

import 'package:amazon_clone_application/constants/global_variables.dart';
import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  String text;
  VoidCallback onTap;
  CustomButton({Key? key, required this.text, required this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      style: ElevatedButton.styleFrom(
        backgroundColor: GlobalVariables.secondaryColor,
        minimumSize: const Size(double.infinity, 50),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(5), // Set radius to 0
        ),
      ),
      child: Text(text,
          style: const TextStyle(
              color: Colors.white, fontSize: 18, fontWeight: FontWeight.w700)),
    );
  }
}
