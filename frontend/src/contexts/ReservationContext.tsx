"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Reservation } from "../types/ReservationType"
import apiReservation from "../services/api/reservations"
import { useAuth } from "./AuthContext"
import reservationsMock from '../mocks/ReservationMock';

type ReservationStatusBackend = 'confirmed' | 'cancelled' | 'completed';

interface ReservationFormInput { 
  title: string;
  address: string;
  checkIn: string; 
  checkOut: string; 
  status: 'Confirmado' | 'Cancelada' | 'Finalizado';
}

interface ReservationCreatePayload {
  user_id: string;
  title: string;
  address: string;
  check_in: string; 
  check_out: string; 
  status: ReservationStatusBackend;
  bedroom_id: string;
}

interface ReservationUpdatePayload {
  title?: string;
  address?: string;
  check_in?: string;
  check_out?: string;
  status?: ReservationStatusBackend;
}


interface ReservationContextType {
  reservations: Reservation[]
  isLoading: boolean
  loadReservations: () => Promise<void>
  createReservation: (data: ReservationFormInput) => Promise<void> 
  updateReservation: (id: string, data: Partial<ReservationFormInput>) => Promise<void> 
  deleteReservation: (id: string) => Promise<void>
  cancelReservation: (id: string) => Promise<void>
}

export const ReservationContext = createContext<ReservationContextType>({
  reservations: [],
  isLoading: true,
  loadReservations: async () => {},
  createReservation: async () => {},
  updateReservation: async () => {},
  deleteReservation: async () => {},
  cancelReservation: async () => {},
})

interface ReservationProviderProps {
  children: ReactNode
}

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
  const { currentUser } = useAuth()
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadReservations = async () => {
    setIsLoading(true)
    let fetchedReservations: Reservation[] = [];

    if (currentUser) {
      try {
        const response = await apiReservation.getMyReservations(); 
        
        if (response && Array.isArray(response.reservations)) {
          fetchedReservations = response.reservations;
        } else {
          console.warn("API de reservas retornou formato inesperado:", response);
        }
      } catch (error) {
        console.error("Erro ao carregar reservas reais do backend:", error);
      }
    }

    const combinedReservations = [...fetchedReservations, ...reservationsMock];
    setReservations(combinedReservations);
    setIsLoading(false);
  }

  const formatBackendDate = (dateString: string): string => {
    const backendPattern = /^\d{2}\/\d{2}\/\d{4} às \d{2}h\d{2}$/;
    
    if (backendPattern.test(dateString)) {
      return dateString;
    }

    const parts = dateString.split('-'); 
    if (parts.length === 3) {
      const [day, month, year] = parts;
      if (day.length === 2 && month.length === 2 && year.length === 4) {
        return `${day}/${month}/${year} às 14h00`; 
      }
    }
    
    const dateObj = new Date(dateString + 'T12:00:00'); 
    if (!isNaN(dateObj.getTime())) {
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year} às 14h00`; 
    }
    
    console.warn("Formato de data desconhecido para o backend e sem conversão:", dateString);
    return dateString;
  };


  const createReservation = async (data: ReservationFormInput) => {
    if (!currentUser) {
        throw new Error("Usuário não autenticado para criar reserva.");
    }
    try {
        const statusMap: Record<ReservationFormInput['status'], ReservationStatusBackend> = {
            'Confirmado': 'confirmed',
            'Cancelada': 'cancelled',
            'Finalizado': 'completed',
        };

        const backendData: ReservationCreatePayload = {
            user_id: currentUser.id,
            title: data.title,
            address: data.address,
            check_in: formatBackendDate(data.checkIn), 
            check_out: formatBackendDate(data.checkOut), 
            status: statusMap[data.status],
            bedroom_id: "278f3d6c-2f3b-4c1e-8a9d-0b1c2e3f4a5b" 
        };
        const response = await apiReservation.create(backendData);
        loadReservations();
        return response;
    } catch (error) {
        console.error("Erro ao criar reserva:", error);
        throw error;
    }
  };

  const updateReservation = async (id: string, data: Partial<ReservationFormInput>) => {
    if (!currentUser) {
        throw new Error("Usuário não autenticado para atualizar reserva.");
    }
    try {
        let statusBackend: ReservationStatusBackend | undefined;
        if (data.status) {
            const statusMap: Record<ReservationFormInput['status'], ReservationStatusBackend> = {
                'Confirmado': 'confirmed',
                'Cancelada': 'cancelled',
                'Finalizado': 'completed',
            };
            statusBackend = statusMap[data.status];
        }

        const backendData: Partial<ReservationUpdatePayload> = {
            title: data.title,
            address: data.address,
            check_in: data.checkIn ? formatBackendDate(data.checkIn) : undefined, 
            check_out: data.checkOut ? formatBackendDate(data.checkOut) : undefined, 
            status: statusBackend,
        };
        const response = await apiReservation.update(id, backendData); 
        loadReservations();
        return response;
    } catch (error) {
        console.error("Erro ao atualizar reserva:", error);
        throw error;
    }
  };

  const deleteReservation = async (id: string) => {
    if (!currentUser) {
        throw new Error("Usuário não autenticado para deletar reserva.");
    }
    try {
        const response = await apiReservation.delete(id);
        loadReservations();
        return response;
    } catch (error) {
        console.error("Erro ao deletar reserva:", error);
        throw error;
    }
  };

  const cancelReservation = async (id: string) => {
    if (!currentUser) {
        throw new Error("Usuário não autenticado para cancelar reserva.");
    }
    try {
        const response = await apiReservation.cancel(id); 
        loadReservations();
        return response;
    } catch (error) {
        console.error("Erro ao cancelar reserva:", error);
        throw error;
    }
  };


  useEffect(() => {
    loadReservations();
  }, [currentUser]);

  return (
    <ReservationContext.Provider value={{ 
      reservations, 
      isLoading, 
      loadReservations,
      createReservation,
      updateReservation,
      deleteReservation,
      cancelReservation,
    }}>
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error("useReservation deve ser usado dentro de ReservationProvider")
  }
  return context
}