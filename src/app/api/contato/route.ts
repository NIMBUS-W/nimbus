// app/api/contato/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Configuração do Gmail com tipagem correta
    const transporterConfig: SMTPTransport.Options = {
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    };

    const transporter: Transporter =
      nodemailer.createTransport(transporterConfig);

    // Email principal
    const mailOptions = {
      from: `"Site Nimbus" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Nova mensagem de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #9333ea;">Nova mensagem do site Nimbus</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Enviado em: ${new Date().toLocaleString("pt-BR")}
          </p>
        </div>
      `,
    };

    // Email de confirmação para o cliente
    const confirmationMail = {
      from: `"Nimbus" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Recebemos sua mensagem - Nimbus",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #9333ea;">Obrigado pelo contato!</h2>
          <p>Olá ${name},</p>
          <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
          <p>Nossa equipe responde em até 24 horas úteis.</p>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #6b7280;"><strong>Sua mensagem:</strong></p>
            <p style="color: #6b7280;">"${message.substring(0, 200)}..."</p>
          </div>
          
          <p>Atenciosamente,<br><strong>Equipe Nimbus</strong></p>
        </div>
      `,
    };

    // Enviar emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMail);

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
